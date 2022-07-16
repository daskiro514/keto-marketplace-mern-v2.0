import api from '../utils/api'

import {
  EBOOKS_LOADED,
  EBOOK_LOADED,
} from './types'

import { setPageIsLoading } from './admin'

export const createEbook = (formData, history) => async dispatch => {
  dispatch(setPageIsLoading(true))
  const res = await api.post('/ebook/createEbook', formData)

  if (res.data.success) {
    dispatch(getEbooks())
    dispatch(setPageIsLoading(false))
    history.push('/ebooks')
  }
}

export const getEbooks = () => async dispatch => {
  dispatch(setPageIsLoading(true))
  const res = await api.get('/ebook/getEbooks')

  if (res.data.success) {
    dispatch(setPageIsLoading(false))
    dispatch({
      type: EBOOKS_LOADED,
      payload: res.data.ebooks
    })
  }
}

export const getEbook = ebookID => async dispatch => {
  const res = await api.get(`/ebook/getEbook/${ebookID}`)

  if (res.data.success) {
    dispatch({
      type: EBOOK_LOADED,
      payload: res.data.ebook
    })
  }
}

export const updateEbook = (ebookID, formData, history) => async dispatch => {
  dispatch(setPageIsLoading(true))
  const res = await api.post(`/ebook/updateEbook/${ebookID}`, formData)

  if (res.data.success) {
    dispatch(getEbooks())
    dispatch(setPageIsLoading(false))
    history.push('/ebooks')
  }
}

export const deleteEbook = ebookID => async dispatch => {
  dispatch(setPageIsLoading(true))
  const res = await api.delete(`/ebook/deleteEbook/${ebookID}`)

  if (res.data.success) {
    dispatch(getEbooks())
    dispatch(setPageIsLoading(false))
  }
}