import "./num.css"

export default function NumberSection(){
     return(
        <div className="numbers-container">
             <div className="card">
                  <h2>ჩვენს შესახებ</h2>
                  <p>არნოლდ ჩიქობავას სახელობის ენათმეცნიერების ინსტიტუტი — სამეცნიერო კვლევითი ინსტიტუტი, რომელიც 1936წელს შექმნილი „აკად. ნ. მარის სახელობის ენის, ისტორიისა და მატერიალური კულტურის ინსტიტუტის“ (ენიმკი) ...</p>
                  <button>მეტის ნახვა</button>
             </div>

             <div className="numbers-container1">
                 <h1>რიხვითი მაჩვენებელი</h1>
                 <div className="stats-section">
                      <div className="stat-card">
                          <div className="img-label">
                               <img src="/word.png" alt="" />
                               <h2>1 235 450</h2>
                          </div>
                          <p>ტერმინების რაოდენობა</p>
                      </div>
                       <div className="stat-card">
                          <div className="img-label">
                               <img src="/search1.png" alt="" />
                               <h2>635 000 </h2>
                          </div>
                          <p>მოძიებული სიტყვა ტერმინი</p>
                      </div>
                       <div className="stat-card">
                          <div className="img-label">
                               <img src="/database.png" alt="" />
                               <h2>154 000</h2>
                          </div>
                          <p>სამეცნიერო ბაზა</p>
                      </div>
                       <div className="stat-card">
                          <div className="img-label">
                               <img src="/open.png" alt="" />
                               <h2>245 000 </h2>
                          </div>
                          <p>სასწავლო-შემეცნებითი მასალა</p>
                      </div>
                       <div className="stat-card">
                          <div className="img-label">
                               <img src="book.png" alt="" />
                               <h2>324 014</h2>
                          </div>
                          <p>ტერმინოლოგიური ლექსიკონი</p>
                      </div>
                       <div className="stat-card">
                          <div className="img-label">
                               <img src="/users.png" alt="" />
                               <h2>150 000</h2>
                          </div>
                          <p>აქტიური მომხმარებელი</p>
                      </div>
                 </div>
             </div>
        </div>
     )
}