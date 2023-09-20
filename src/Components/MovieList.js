import Card from './MovieItem'

const renderList=(props)=>{
   return(
    <div className='p-3'>
        <div className='cards-container'>
        {props.data.map(item=>{
            return(<div className='item p-1 is-bg-primary'>
            <Card data={item}/>
            </div>)
        }) }
        </div>
    </div>
   )
}
export default renderList