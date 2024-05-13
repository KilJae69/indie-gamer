import { useState } from "react";

export function useIsClient(){
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return isClient;
}

export function useFormState(action){
    const [state, setState] = useState({error:null,loading:false});
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setState({error:null,loading:true});
      const form = e.currentTarget;
      const formData = new FormData(form);
  
      const result = await action(formData);
      if (result?.isError) {
        setState({ error: result.message,loading:false});
   
      } else {
        form.reset();
        setState({ error: null, loading:false});
      }
    };
  
    return [state,handleSubmit];
  }