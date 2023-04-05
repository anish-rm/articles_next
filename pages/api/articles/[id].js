import { articles } from "@/data";

// like this we ca fetch from our database
// we want to access the url ids by using req.query.id

export default function handler({query: {id}}, res) {
    const filtered = articles.filter(article => article.id === id)
    if(filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({
            message: `Article with that id ${id} not found`
        })
    }
    
}