import * as types from '../../constants'
import * as service from '../../services/questionService'

export const getQuestionList = (inspectionIdx, params) => async (dispatch) => {
  dispatch({ type: types.DATA_REQUEST })
  try {
    const data = await service.getQuestionList(inspectionIdx, params)
    dispatch({ type: types.DATA_SUCCESS, data: { questions: data } })
  } catch (e) {
    console.error(e)
    dispatch({ type: types.DATA_FAILURE, error: e })
  }
}
