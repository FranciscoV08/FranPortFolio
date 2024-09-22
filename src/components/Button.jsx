'use client'

export const Button = () => {

    const dowloadPDF = (url) => {
        console.log('Descargando')
        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href= url
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove()


    }

    return (
        <div>
            <div className="text-center">
                <button onClick={() => dowloadPDF("http://localhost:3000/cv-FranciscoVillavicencio.pdf")} className="text-white inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]">Descargar CV</button>
            </div>
        </div>
    )
}
