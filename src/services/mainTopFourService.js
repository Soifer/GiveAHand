import dal, {fetchProps} from './dal';

function GetData() {
   let props = Object.create(fetchProps.prototype);
   props.url = 'http://localhost:8000/api/mainTopFour';
   return dal.fetch(props);
}

export default GetData;