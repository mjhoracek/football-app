import React from 'react'

const Stats = ({ style, fill }) => (

    <svg style={style || { width: "100%" }} viewBox="0 0 30 30" fill={fill || 'white'} xmlns="http://www.w3.org/2000/svg">
        <path d="M29.9993 28.3019C29.9993 29.2393 29.2386 30 28.3012 30H1.69909C0.761747 30 0.00100708 29.2393 0.00100708 28.3019V1.69808C0.00100708 0.76074 0.761747 0 1.69909 0C2.63643 0 3.39717 0.76074 3.39717 1.69808V26.6038H28.3012C29.2394 26.6038 29.9993 27.3637 29.9993 28.3019ZM5.63864 23.9311C5.77788 24.0177 5.9324 24.0567 6.08353 24.0567C6.36796 24.0567 6.6456 23.9141 6.80776 23.6534L11.8375 15.529L15.057 17.9436C15.2668 18.1024 15.5368 18.1533 15.7872 18.0846C16.0402 18.0166 16.2465 17.8358 16.3476 17.5964L18.7045 12.0114L22.5914 13.6602C22.9378 13.8079 23.342 13.7078 23.578 13.4165L27.7349 8.34013V10.6156C27.7349 11.0842 28.1153 11.4646 28.584 11.4646C29.0535 11.4646 29.433 11.0842 29.433 10.6156V6.08677C29.433 5.6181 29.0535 5.23773 28.584 5.23773H24.056C23.5865 5.23773 23.207 5.6181 23.207 6.08677C23.207 6.55544 23.5865 6.93581 24.056 6.93581H26.6914L22.6721 11.8492L18.5874 10.1163C18.3785 10.028 18.145 10.0263 17.9353 10.1112C17.7264 10.1961 17.5609 10.36 17.4709 10.568L15.2065 15.9339L12.1134 13.6144C11.9215 13.4717 11.6787 13.414 11.4452 13.459C11.2117 13.5031 11.0071 13.6432 10.8815 13.8462L5.3627 22.7611C5.11563 23.1576 5.23959 23.684 5.63864 23.9311Z" fill={fill}/>
    </svg>
    )
    
    export default Stats