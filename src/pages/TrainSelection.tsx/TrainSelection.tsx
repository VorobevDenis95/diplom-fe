import { useEffect, useState } from "react";
import { ResponseRoutes, initResponseRoutes } from '../../shared/types/typesRoutesBilets';
import { useLocation, useParams } from "react-router-dom";
import { getRoute } from "../../shared/api/serviceApi";

const TrainSelection = () => {
  const params = useParams();
  const {cityFrom, cityTo, dateStart, dateEnd} = params;
  const [response, setResponce] = useState<ResponseRoutes>(initResponseRoutes);
  
  useEffect(() => {
    (async () => {
      if (cityFrom && cityTo && dateStart && dateEnd) {
        const data = await getRoute({
          cityFrom, cityTo, dateStart, dateEnd
        });
        if (data) setResponce(data);
        console.log(data);
      }
    })() 
}, [])

return (
  <>
    
  </>
  )
}

export default TrainSelection;