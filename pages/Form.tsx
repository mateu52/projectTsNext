import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        author: '',
        title: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok){
            console.log('Dane zostały zapisane')
        }
    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(e.target)
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    return(
        <div className="p-2 bg-blue-50">
            <form onSubmit={handleSubmit}>
                <label htmlFor="author" className="pr-2">Autor</label>
                <input 
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
                <label htmlFor="title" className="px-2">Komentarz</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <button type="submit" className="pl-2">Wyślij</button>
            </form>
        </div>
    )
}
export default Form;