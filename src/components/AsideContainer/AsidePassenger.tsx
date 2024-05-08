import BodyContainerPassenger from "../SettingsContainer/BodyContainerPassenger/BodyContainerPassenger";
import SettingContainer from "../SettingsContainer/SettingContainer";
import TitleContainer from "../SettingsContainer/TitleContainer/TitleContainer";


const AsidePassenger = () => {
  return (
    <SettingContainer>
      <TitleContainer title='ДЕТАЛИ ПОЕЗДКИ' />
      <BodyContainerPassenger backStatus={false}/>
      <BodyContainerPassenger backStatus={true} />
    </SettingContainer>
  )
}

export default AsidePassenger;