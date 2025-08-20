import CategoryItem from '../category-item/category-item.component'

import './directory.styles.scss'

const Directoy = ({ categories }) => {
    return (
        <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
    )

}

export default Directoy