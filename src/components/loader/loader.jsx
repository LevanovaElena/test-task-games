import {Flex} from "../../styles/common";


const Loader = ({ref}) => {
    return (
        <Flex jcontent={'center'}>
            <span className="loader" ref={ref}></span>
        </Flex>
    );
}

export default Loader
