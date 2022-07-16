import React from 'react'
import { connect } from 'react-redux'
import { createEbook } from '../../../actions/ebook'
import { useHistory } from 'react-router'
import Spinner from '../../layout/Spinner'

const AdminEbookCreate = ({ createEbook, isLoading }) => {
  const history = useHistory()

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [image, setImage] = React.useState()
  const [book, setBook] = React.useState()

  const onSubmit = e => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('book', book)
    createEbook(formData, history)
  }

  return (
    <div className='admin-category-create'>
      <div className='font-36 pt-3'>Add an Recipe Book</div>
      <div className='row my-3'>
        <div className='col-md-12'>
          <div className='p-3 bg-white keto-rounded-lg mt-3 keto-shadow'>
            {isLoading ?
              <Spinner />
              : <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control category-field'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Description</label>
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
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Image</label>
                  <input
                    type='file'
                    accept='image/*'
                    className='form-control'
                    onChange={e => setImage(e.target.files[0])}
                    required
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
  isLoading: state.admin.pageIsLoading
})

export default connect(mapStateToProps, { createEbook })(AdminEbookCreate)