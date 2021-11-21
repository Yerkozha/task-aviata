const state = {
    data: []
}
const mutations = {
    SET_FLIGHT_DATA(state,data){
        state.data = data
    }
}
const getters = {
    getAllDataFlights: state => state.data
}
const actions = {}

export default {
    state,
    getters,
    actions,
    mutations
}