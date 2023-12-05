import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'

import Logo from '../../assets/logo.svg'

import api from '../../services/api'

import './CreatePoint.css'

interface ItemProps {
  id: number
  title: string
  image_url: string
}

interface UFProps {
  sigla: string
}

interface CityProps {
  nome: string
}

export default function CreatePoint() {
  const [items, setItems] = useState<ItemProps[]>([])
  const [ufs, setUfs] = useState<string[]>([])
  const [selectUf, setSelectUf] = useState('0')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  })
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [selectCity, setSelectCity] = useState('0')
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    51.505, -0.09,
  ])

  const navigate = useNavigate()

  useEffect(() => {
    api.get('items').then((res) => {
      setItems(res.data)
    })
  }, [])

  useEffect(() => {
    axios
      .get<UFProps[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )
      .then((res) => {
        const ufInitials = res.data.map((uf) => uf.sigla)

        setUfs(ufInitials)
      })
  }, [])

  useEffect(() => {
    if (selectUf === '0') {
      return
    }

    axios
      .get<CityProps[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectUf}/municipios
`
      )
      .then((res) => {
        const cityNames = res.data.map((city) => city.nome)

        setCities(cityNames)
      })
  }, [selectUf])

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords

  //     setInitialPosition([latitude, longitude])
  //   })
  // }, [])

  function handleSelectUf(e: ChangeEvent<HTMLSelectElement>) {
    const uf = e.target.value

    setSelectUf(uf)
  }

  function handleSelectCity(e: ChangeEvent<HTMLSelectElement>) {
    const city = e.target.value

    setSelectCity(city)
  }

  const Markers = () => {
    useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng])
      },
    })

    return selectedPosition ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
      ></Marker>
    ) : null
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id)

    if (alreadySelected >= 0) {
      const filteredSelected = selectedItems.filter((item) => item !== id)
      setSelectedItems(filteredSelected)
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const { name, email, whatsapp } = formData
    const uf = selectUf
    const city = selectCity
    const [latitude, longitude] = selectedPosition
    const items = selectedItems

    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items,
    }

    await api.post('points', data)

    alert('Ponto de coleta criado')

    navigate('/')
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={Logo} alt="Ecoleta" />

        <Link to={'/'}>
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <MapContainer
            center={selectedPosition}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Markers />
          </MapContainer>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectUf}
                onChange={handleSelectUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map((uf) => {
                  return (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="field">
              <label htmlFor="uf">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map((city) => {
                  return (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => handleSelectItem(item.id)}
                  className={selectedItems.includes(item.id) ? 'selected' : ''}
                >
                  <img src={item.image_url} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              )
            })}
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  )
}
