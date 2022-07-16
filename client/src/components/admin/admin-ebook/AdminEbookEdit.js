import React from 'react'
import { connect } from 'react-redux'
import { getEbook, updateEbook } from '../../../actions/ebook'
import { useHistory } from 'react-router'
import Spinner from '../../layout/Spinner'

const AdminEbookEdit = ({ match, getEbook, updateEbook, isLoading, ebook }) => {
  const ebookID = match.params.id
  const history = useHistory()

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [image, setImage] = React.useState(null)
  const [book, setBook] = React.useState(null)

  React.useEffect(() => {
    getEbook(ebookID)
  }, [ebookID, getEbook])

  React.useEffect(() => {
    setName(ebook.name)
    setDescription(ebook.description)
    setImage(ebook.image)
    setBook(ebook.book)
  }, [ebook])

  const onSubmit = e => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('book', book)
    updateEbook(ebookID, formData, history)
  }

  return (
    <div className='admin-ebook-create'>
      <div className='font-36 pt-3'>Edit An Ebook</div>
      <div className='row my-3'>
        <div className='col-md-12'>
          <div className='p-3 bg-white keto-rounded-lg mt-3 keto-shadow'>
            {isLoading ?
              <Spinner />
              : <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                  <label>Ebook Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control ebook-field'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Ebook Description</label>
                  <textarea
                    type='text'
                    name='description'
                    className='form-control'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={5}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Book</label>
                  <input
                    type='file'
                    accept=".pdf,.epub"
                    className='form-control'
                    onChange={e => setBook(e.target.files[0])}
                  />
                </div>
                <div className='form-group'>
                  <label>Image</label>
                  <input
                    type='file'
                    accept='image/*'
                    className='form-control'
                    onChange={e => setImage(e.target.files[0])}
                  />
                </div>
                <div className='d-flex justify-content-end'>
                  <button className='btn bg-keto-primary'>
                    Submit
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.admin.pageIsLoading,
  ebook: state.ebook.ebook,
})

export default connect(mapStateToProps, { getEbook, updateEbook })(AdminEbookEdit)