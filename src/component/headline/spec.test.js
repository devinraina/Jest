import React from 'react';
import { shallow } from 'enzyme';
import Headline from '.';
import { findByTestAtrr, checkProps } from '../../../Utils';


const setUp = (props={}) => {
    const component =shallow(<Headline {...props}/>);
    return component;
};

describe('Headline Component',()=>{

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 35,
                    onlineStatus: false
                }]
            };
            const propsErr = checkProps(Headline,  expectedProps)
            expect(propsErr).toBeUndefined();

        });

    });

    let wrapper;
    describe('have props', ()=>{
        beforeEach(()=>{
            const props={
                header: "Test Header",
                desc: "Test Description"
            };
            wrapper=setUp(props);
        });

        it('Should render without errors', ()=>{
            const component= findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });
        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'headerTag');
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'descTag');
            expect(desc.length).toBe(1);
        });
    });

    describe('Have No Props', ()=>{

        let wrapper;
        beforeEach(()=>{
            wrapper=setUp();
        });
        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });
    })
})