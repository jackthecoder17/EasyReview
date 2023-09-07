import Apimanager from "./axios";

export const GenerateReviewApi = (data) =>{
    const result = Apimanager("/generate-review",{
        method: "POST",
        data: data
    });
    return result;
}