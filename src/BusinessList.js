import Business from "./Business"

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const businessArray = list.map(i => i = Business)
const BusinessList = () => {

    return ( <div>
        <ul>
          {businessArray}
        </ul>
      </div> );
}
 
export default BusinessList;