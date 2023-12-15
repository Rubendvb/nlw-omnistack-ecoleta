import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './Dropzone.css'

interface Props {
  onFileUploaded: (file: File) => void
}

export default function Dropzone({ onFileUploaded }: Props) {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]

      const fielUrl = URL.createObjectURL(file)

      setSelectedFileUrl(fielUrl)
      onFileUploaded(file)
    },
    [onFileUploaded]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.*'],
    },
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Imagem do estabelecimento
        </p>
      )}
    </div>
  )
}
