import "./searchbar.css"

export default function Searchbar() {
    return (
        <div className="search-container">
              <form action="" method="post">
                 <div className="input-container">
                      <input type="text " placeholder="სიტყვა/ტერმინი" />
                 </div>
                 <div className="radio-buttons-container">
                     <div className="radio-button">
                         <input type="radio" name="search" value="all" />
                         <label htmlFor="English">ინგლისური</label>
                     </div>
                     <div className="radio-button">
                         <input type="radio" name="search" value="terms" />
                         <label htmlFor="Russian">რუსული</label>
                     </div>
                     <div className="radio-button">
                         <input type="radio" name="search" value="definitions" />
                         <label htmlFor="definition">განმარტება</label>
                     </div>
                 </div>
                 <button type="submit"><img src="./search.png" alt="" /></button>
              </form>
        </div>
    )
}