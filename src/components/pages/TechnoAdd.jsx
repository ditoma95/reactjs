import { useState } from "react";

export default function TechnoAdd(props) {
    //etat
    const {handleAddTechno} = props;
    
    //données statiques
    // const techno = {
    //     name: "React",
    //     category: "Front",
    //     description : "Learn react js is good"
    // }

    //données dynamics d'une techno (un seul objet)
    const [techno, setTecno] = useState({
        technoname: '',
        technocategory : '',
        technodescription: ''
    })
    
    //comporteement
    function handleSubmit(e) {
        e.preventDefault();
        handleAddTechno(techno);

        //une fois soumis il faut reaffichier les champs vide
        setTecno({
            technoname:'',  
            technocategory:'', 
            technodescription:''
         });
    }

    //comportement des champs d'entréer
    function handleChange(e) {
        //recuperer la valeur saisie par l'utilisateur
        const {name , value} = e.target; 
        //on clone d'abord l'objet et on le mondifie (puisqu'on ne peut pas agir directement sur un etat)
        setTecno({...techno , [name]:value})
    }


    
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)} className="w-1/2 p-4 m-auto bg-gray-200 mt-14">
            <div className="groupe">
                <label htmlFor="technoname">Nom</label>
                <input type="text" name="technoname" id="technoname" className="w-full p-2 technoname" value={techno.technoname} onChange={(e) => handleChange(e)}/>
            </div>
            <div className="mt-4">
                <label htmlFor="technocategory" className="">Category</label>
                <select name="technocategory" id="technocategory" className="w-full p-2 bg-white" value={techno.technocategory} onChange={(e) => handleChange (e)}>
                    <option disabled value="">Select your category</option>
                    <option value="front">Front</option>
                    <option value="back">back</option>
                    <option value="full">full</option>
                </select>
            </div>

            <div className="mt-4">
                <label htmlFor="technodescription">Description</label>
                <textarea name="technodescription" id="technodescription" cols="30" rows="10" className="w-full h-20 border-0 outline-none resize-none" value={techno.technodescription} onChange={(e)=>handleChange(e)}></textarea>
            </div>
            <div className="flex w-32 p-4 m-auto mt-10 text-xl text-white bg-blue-900 rounded-lg cursor-pointer hover:bg-blue-600">
                <input className="flex cursor-pointer" type="submit" value="Ajouter" />
            </div>
        </form>
    </div>
  )
}
