import dal, {fetchProps} from './dal';

const GetData = () => {
    let props = Object.create(fetchProps.prototype);
    console.log('props:', props);
    props.url = 'http://localhost:8000/api/mainFeed';    
    return dal.fetch(props);
};

export default GetData;