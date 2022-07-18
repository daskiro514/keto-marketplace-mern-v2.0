import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getEbooks, deleteEbook } from '../../../actions/ebook'

const AdminEbooks = ({ ebooks, getEbooks, baseURL, deleteEbook }) => {

  React.useEffect(() => {
    getEbooks()
  }, [getEbooks])

  const [pageEbooks, setPageEbooks] = React.useState([])
  const [pageNumber, setPageNumber] = React.useState(1)
  const [maxPageNumber, setMaxPageNumber] = React.useState(1)

  React.useEffect(() => {
    setPageEbooks(ebooks.slice((pageNumber - 1) * 5, pageNumber * 5))
    setMaxPageNumber(Math.ceil(ebooks.length / 5))
  }, [ebooks, pageNumber])

  const nextPage = () => {
    if (pageNumber + 1 > maxPageNumber) {
      lastPage()
      return
    }
    setPageNumber(pageNumber + 1)
  }

  const prevPage = () => {
    if (pageNumber - 1 < 1) {
      firstPage()
      return
    }
    setPageNumber(pageNumber - 1)
  }

  const firstPage = () => {
    setPageNumber(1)
  }

  const lastPage = () => {
    setPageNumber(maxPageNumber)
  }

  return (
    <div className='admin-ebooks'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='d-flex align-items-center pt-3'>
            <div className='font-36 mr-2'>Recipe Books</div>
            <Link to='ebook-create'><i className='fa fa-plus-circle font-24 cursor-pointer pt-2'></i></Link>
          </div>
        </div>
        <div className='col-lg-6'>

        </div>
      </div>
      <div className='row my-3'>
        <div className='col-md-12'>
          {ebooks.length === 0 ? <div className='text-center my-5 py-5'>There are no Ebooks yet.</div>
            :
            <div className='table-responsive bg-white keto-rounded-lg keto-shadow'>
              <table className='table'>
                <thead className='thead-light'>
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pageEbooks.map((item, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><a href={baseURL + item.book} download target='_blink' rel='noreferrer'><img alt='SETIMAGE' src={baseURL + item.image} height="100px" /></a></td>
                      <td>{item.name}</td>
                      <td>{item.description.slice(0, 80)}...</td>
                      <td>
                        <Link
                          className='btn btn-sm border mx-1 width-40'
                          to={`ebook-edit/${item._id}`}
                        >
                          <i className="fa fa-pencil font-18"></i>
                        </Link>
                        <button
                          className='btn btn-sm border mx-1 width-40'
                          onClick={() => {
                            if (window.confirm('Are you sure?')) deleteEbook(item._id)
                          }}
                        >
                          <i className="fa fa-trash-o font-18"></i>
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          }
          {ebooks.length <= 5 ? null
            :
            <>
              <div className='text-center pt-3'>
                {(pageNumber - 1) * 5 + 1} - {(pageNumber - 1) * 5 + pageEbooks.length} of {ebooks.length}
              </div>
              <div className='text-center pt-1'>
                <i onClick={() => firstPage()} className="material-icons">first_page</i>
                <i onClick={() => prevPage()} className="material-icons">navigate_before</i>
                <i onClick={() => nextPage()} className="material-icons">navigate_next</i>
                <i onClick={() => lastPage()} className="material-icons">last_page</i>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ebooks: state.ebook.ebooks,
  baseURL: state.admin.baseURL
})

export default connect(mapStateToProps, { getEbooks, deleteEbook })(AdminEbooks)