import dal, {fetchProps} from './dal';

const GetData = (id) => {
    let props =new fetchProps();
    props.method = 'GET';
    props.url = 'http://localhost:8000/api/article/talkback/mongo/' + id;    
    return dal.fetch(props);
};


export const  PostData = (talkback) => {
    console.log('PostData talkback', talkback);
    let props =new fetchProps();
    props.method = 'POST';
    props.body = JSON.stringify(talkback);
    props.headers.append('Content-Type','application/json');
    props.url = 'http://localhost:8000/api/article/talkback/mongo';    
    return dal.fetch(props);
};

export default GetData;