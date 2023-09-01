import styled from "@emotion/styled";

export const ProfileAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 10px;
  width: 400px;
  height: 350px;
  background-color: gray;
  border-radius: 2px;
`
export const Description = styled.div`
  position: relative;
  text-align: center;
  width: 350px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 2px;
  background-color: #FFFFFF;
  box-shadow: 0px 15px 20px rgba(150, 120, 200, 0.45);
`
export const AvatarImg = styled.img`

  max-height: 70px;
  border-radius: 50%;
  background-color: gray;
  border: 7px solid #FFFFFF;
`
export const ParName = styled.p`
  font-weight: 700;
  line-height: 1.3;

  margin-top: 20px;
  color: black;
`
export const ParTag = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: gray;
`
export const ParLocation = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: gray;
`
export const ProfileStats = styled.ul`
/*list-style: none;*/
display: flex;
padding: 10px;
width: 370px;
background-color: white;
margin: 0px;
 li{
    border: 1px solid gray;
    border-radius: 10px;

  display: grid;
  width: 50px;
  justify-items: center;

  @media screen and (min-width: 768px){
    width: 128px;
  }
 }
`
export const StatsLabel = styled.span`
font-weight: 400;
font-size: 16px;
margin-bottom: 6px;
color: gray;
`
export const StatsQuantity = styled.span`
font-weight: 700;
font-size: 24px;

color: blank;
`
