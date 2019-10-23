import React from 'react';

interface Acotr {
    id: Number;
    login: String;
    display_login: String;
    gravatar_id: String;
    url: String;
    avatar_url: String;
}

interface Repo {
    id: Number;
    name: String;
    url: String;
}

interface Payload {
    push_id: Number;
    size: Number;
    distinct_size: Number;
    ref: String;
    head: String;
    before: String;
    commits: Array<Commit>
}

interface Commit {
    sha: String;
    author: Author;
    message: String;
    distinct: Boolean;
    url: String;
}

interface Author {
    email: String;
    name: String;
}

interface EventEntity {
    id: String;
    type: String;
    actor: Acotr;
    repo: Repo;
    payload: Payload;
    public: Boolean;
    createAt: String;
}

interface Props {
    value: EventEntity;
}

interface State {
    event: EventEntity;
}

class Event extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            event: props.value
        }
    }

    render() {
        return (
            <div>
            
            </div>
        )
    }
}

export default Event