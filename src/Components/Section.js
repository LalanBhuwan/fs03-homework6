const Section = ()=>{
    return(
        <div className="section_container dis_flex">
            <div className="pragraph">
                <h3>Header</h3>
                <h3> Footer</h3>
                <p>3Duis ultricies locus sed turpis tincidunt id aliquet risus.</p>
                <p>Bibendum ess ultricies integer quis acutor.</p>
                <div className="dis_flex ">
                <div className="circle yellow_circle"></div>
                <div className="circle red_circle"></div>
                <div className="circle blue_circle"></div>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
            </div>
        </div>
    );
}
export default Section;