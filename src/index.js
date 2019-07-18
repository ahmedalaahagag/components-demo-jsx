// Import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a component
const App = () => {
    return (
        <div className="ui contaioner comments">
            <ApprovalCard>
                Are you sure?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice Blog Post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 2:00AM"
                    content="I love the subject!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Yesterday at 5:00PM"
                    content="Good writing!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

// Render
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);