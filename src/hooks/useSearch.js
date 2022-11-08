import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setError] = useState(false);

    const searchApi = async (value) => {
        try {
            const response = await yelp.get('/search', {params: {
                term: value,
                location: 'New York',
                limit: 50
            }});
            setResults(response.data.businesses);
            setError(false)
        }
        catch(e){
            setError(true);
        }
    }

    useEffect(() => {
        searchApi(null);
    }, []);

    return [results, errorMessage, searchApi];
}