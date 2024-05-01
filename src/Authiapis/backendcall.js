import { makeApiRequest } from "./axiosService";

  export const UserFormUpload = async (bodyData) => {
    try {
      let params = {
        url: `uploaddata`,
        method: "POST",
        data: bodyData
      }
      console.log('bodyData', bodyData)
      let response = await makeApiRequest(params);
      return {
        status:response.status,
        message: response.message
      }
    } catch (error) {
      console.log('buytoken error',error);
      return {
        status:false,
        message: "Error on server"
      }
    }
  }

  export const staketoken = async (bodyData) => {
    try {
      let params = {
        url: `staketoken`,
        method: "POST",
        data: bodyData
      }
      let response = await makeApiRequest(params);
      // console.log('response',response)
      return {
        status:response.status,
        message: response.message,
        data:response.data
      }
    } catch (error) {
      console.log('getLoanHistory error',error);
      return {
        status:false,
        message: "Error on server"
      }
    }
  }

  export const getStakeduration = async (datad) => {
    try {
      let params = {
        url: `getstakedtime`,
        method: "POST",
        data:datad
      }
      let response = await makeApiRequest(params);
      //  console.log('response',response)
      return {
        status:response.status,
        message: response.message,
        data:response.data
      }
    } catch (error) {
      console.log('getAdminFeeAmount error',error);
      return {
        status:false,
        message: "Error on server"
      }
    } 
  }