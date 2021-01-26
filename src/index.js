import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './commentsDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App=()=>{
    return (
        <div className="ui container comments">
        <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Nice blog!" avatar={faker.image.image()}/></ApprovalCard>
        <ApprovalCard><CommentDetail author="Alex" timeAgo="Toady at 5:00PM" comment="Wowww"/></ApprovalCard>
        <ApprovalCard><CommentDetail author="Jane" timeAgo="Yesterday 4:00AM" comment="i like it"/></ApprovalCard>
        </div>
    );
}

ReactDom.render(<App/>,document.querySelector('#root'));