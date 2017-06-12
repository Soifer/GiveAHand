import dal, {fetchProps} from './dal';

function GetArticle(id) {
   let props = Object.create(fetchProps.prototype);
   props.url = 'http://localhost:8000/api/article/' + id;
   return dal.fetch(props);
}

export default GetArticle;