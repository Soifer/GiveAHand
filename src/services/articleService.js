import dal, {fetchProps} from './dal';

function GetArticles() {
   let props = Object.create(fetchProps.prototype);
   console.log('props:',props);
   props.url = 'http://api-dev.nana10.co.il/Epg/getall';
   return dal.fetch(props);
}

export default GetArticles;