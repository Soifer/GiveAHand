import dal, {fetchProps} from './dal';

const GetData = (id) => {
    let props = Object.create(fetchProps.prototype);
    props.url = 'http://localhost:8000/api/article/talkback/mongo/' + id;    
    return dal.fetch(props);
};

export default GetData;