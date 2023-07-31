export default function FormContacto({nombre, edad}) {
    return (
        <form action="">
            <label htmlFor="">{nombre}</label><br />
            <input type="text" placeholder={nombre} /><br />
            <label htmlFor="">Edad</label><br />
            <input type="number" placeholder={edad} /><br />
            <label htmlFor="">Email</label><br />
            <input type="email" /><br />
            <label htmlFor="">Asunto</label><br />
            <textarea name="" id="" cols="50" rows="10"></textarea>
        </form>
        
    )
}