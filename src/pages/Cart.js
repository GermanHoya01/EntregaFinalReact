import { useRef } from "react"

const Cart = () => {

    const nameRef = useRef()
    const emailRef = useRef()


    const handleClick = () => {

        const nombre = nameRef.current.value
        const email = emailRef.current.value


        const usuario = { nombre, email }

        console.log(usuario)
    }

    const handleChange = (e) => {
        e.preventDefault()
        console.log("key down", e.key)
    }


    const handleNoRedirect = (e) => {
        e.preventDefault()
        console.log('no redirecciono')
        e.stopPropagation()
    }

    const handleStopPropagation = (e) => {
        console.log("click en el div")
        e.stopPropagation()
    }


    return (
        <div onClick={handleStopPropagation}>
            <div>
                <label htmlFor="">name</label>
                <input  onKeyDown={handleChange} type="text" />
            </div>
            <div>
                <label htmlFor="">email</label>
                <input ref={emailRef} type="text" />
            </div>
            <button>ver en consola</button>
            <a href="http://google.com" onClick={handleNoRedirect}>ir a google</a>
        </div>
    )
}

export default Cart