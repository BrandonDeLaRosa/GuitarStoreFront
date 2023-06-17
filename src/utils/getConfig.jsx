const getConfig = () => ({
    headers: { ["access-token"]: `${localStorage.getItem("token")}`}
    // headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
})

export default getConfig;