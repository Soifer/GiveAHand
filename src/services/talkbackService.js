import dal, {fetchProps} from './dal';

const GetData = () => {
    let props = Object.create(fetchProps.prototype);
    props.url = 'http://localhost:8000/api/article/talkback/mongo/1321';    
    return dal.fetch(props);
};

export default GetData;