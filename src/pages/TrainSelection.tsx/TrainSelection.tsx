import { useEffect, useState } from "react";
import { ResponseRoutes, initResponseRoutes } from '../../shared/types/typesRoutesBilets';
import { useLocation, useParams } from "react-router-dom";
import { getRoute } from "../../shared/api/serviceApi";

const TrainSelection = () => {
  const [response, setResponce] = useState<ResponseRoutes>(initResponseRoutes);
  const params = useParams();
  const locale = useLocation();
  console.log(params)
  console.log(locale)
  console.log(1)
  useEffect(() => {
    (async () => {
      const data = await getRoute();
      if (data) setResponce(data);
      console.log(data);
    })() 
}, [])

return (
  <>
  12334
  </>
  )
}

export default TrainSelection;