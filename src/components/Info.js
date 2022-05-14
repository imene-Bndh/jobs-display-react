import React from 'react';

const Tags = ({ t }) => {
    return <div className="tag">{t}</div>
}

const Info = ({ dt }) => {
    /* 3 sections :
                    logo rounded 
                    info1 :
                        company , new , featured
                        porition
                        postedAt , contract , location
                    info2 :
                        role , level , languages , tools */
    return (
        <div className={dt.featured === true ? "info additionalshadow" : "info"}>
            <div className="row">
                <div className="col-2">
                    <img src={dt.logo}></img>
                </div>
                <div className="col-5">
                    <div>
                        <div className="bluetext line">{dt.company}</div>
                        {dt.new === true ? <div className="specificity new">NEW!</div> : ""}
                        {dt.featured === true ? <div className="specificity featured">FEATURED</div> : ""}
                    </div>
                    <div className="line">
                        <b>{dt.position}</b>
                    </div>
                    <div className="greytext line">
                        {dt.postedAt}
                        &ensp;.&ensp;
                        {dt.contract}
                        &ensp;.&ensp;
                        {dt.location}
                    </div>
                </div>
                <div className="col-5">
                    <div className="rightposition line">
                        <div className="tag">{dt.role}</div>
                        <div className="tag">{dt.level}</div>
                        {dt.languages.map((element) => (
                            <Tags t={element} key={element} />
                        ))
                        }
                        {dt.tools.map((element) => (
                            <Tags t={element} key={element} />
                        ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Info;