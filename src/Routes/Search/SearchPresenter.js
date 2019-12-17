import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding : 0px 20px;  
`;

const Form = styled.form`
    margin-bottom : 50px;
    width : 100%;
`

const Input = styled.input`
    all : unset;
    font-size : 28px;
    width :100%;
`


// props
const SearchPresenter = ({ movieResults, tvResults, searchTerm, loading ,error, handleSubmit, updateTerm }) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV shows..." value={searchTerm} onChange={updateTerm} />
            
        </Form>
    </Container>
);  

// TVContainer에서 보내준 props! 5가지 타입 체크 추후 ts사용시 제거
SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit : PropTypes.func.isRequired,
    updateTerm : PropTypes.func.isRequired
};

export default SearchPresenter;