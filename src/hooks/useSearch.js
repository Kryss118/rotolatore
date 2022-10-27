import React, {useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setError] = useState(false);

    const searchApi = async (value) => {
        try {
            const response = await yelp.get('/search', {params: {
                term: value,
                location: 'Italy',
                limit: 50
            }});
            setResults(response.data.businesses);
            setError(false)
        }
        catch(e){
            setError(true);
        }
    }

    return [results, errorMessage, searchApi];
}