// here we can make db calls
// two things get all article
// get specific article

import { articles } from "@/data";
// like this we ca fetch from our database

export default function handler(req, res) {
    res.status(200).json(articles)
}