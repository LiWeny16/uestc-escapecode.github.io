
window.onload = () => {
    const time = document.getElementById("time")
    time.innerText = now()
    document.body.style.overflowY = "hidden"
    document.body.style.overflowX = "hidden"

    const params = new URLSearchParams(window.location.search)
    var yourName = params.get("name")
    var yourDegree = params.get("type")
    if (!yourName || !yourDegree) {
        yourName = prompt("聪花让你先输名字捏", '吴彦祖')
        yourDegree = prompt("聪花让你后输学位捏", '请填:本科生/研究生/博士生')
    }
    if (yourDegree == "本科生") {
        document.getElementById("pass-type").innerText = "本科用户，入校授权有效！"
        document.getElementById("degree").innerText = `本科生`
    }
    else if (yourDegree == "研究生") {
        document.getElementById("pass-type").innerText = "研究生用户，入校授权有效！"
        document.getElementById("degree").innerText = `研究生（硕士）`
        document.getElementById("degree").style.transform = "translate(24px,0px)"
    }
    else if (yourDegree == "博士生") {
        document.getElementById("pass-type").innerText = "研究生用户，入校授权有效！"
        document.getElementById("degree").innerText = `研究生（博士）`
        document.getElementById("degree").style.transform = "translate(24px,0px)"
    }
    else {
        // alert("填错了，再来")
        // location.reload(true)
    }
    document.getElementById("nav-to-qr").onclick = function () { alert(`
公告: 本服务支持到2024年2月
在链接后加入 ?name=吴彦祖&type=本科生 可以快速填入`) }
    document.getElementById("name").innerText = `${yourName}`

}
const now = () => {
    const now = new Date()
    const offsetMs = now.getTimezoneOffset() * 60 * 1000
    const dateLocal = new Date(now.getTime() - offsetMs)
    return dateLocal.toISOString().slice(0, 19).replace("T", " ")
}

function getQueryString(name) {
    var query_string = "?name=mick&age=20" // window.location.search
    if (!query_string) return null // 如果无参，返回null
    var re = /[?&]?([^=]+)=([^&]*)/g
    var tokens
    while (tokens = re.exec(query_string)) {
        if (decodeURIComponent(tokens[1]) === name) {
            return decodeURIComponent(tokens[2])
        }
    }
    return null
}