import * as S from "@/styles/footer";
import logoImg from "../../../public/assets/logo.svg";
import heartIco from "../../../public/assets/heartIco.svg";
import brazilFlag from "../../../public/assets/brazilFlag.svg";
import Image from "next/image";
import { TextMD } from "@/styles/typography";
import { VersionTag } from "@/styles/buttons";

export function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.HeaderLogo>
          <Image src={logoImg} alt="logo img" />
          <TextMD>Exercita.ai</TextMD>
          <VersionTag>BETA v0.0.1</VersionTag>
        </S.HeaderLogo>
        <br />
        <S.TextSection>
          <div>
            <p style={{ marginBottom: 4 }}>
              Feito no Brasil{" "}
              <Image width={15} src={brazilFlag} alt="logo img" />
            </p>
            <p>© 2023 Exercita.ia</p>
          </div>
        </S.TextSection>
        <S.CreatedBySection>
          <p>Criado com </p>
          <Image src={heartIco} alt="logo img" />
          <p> por @daniellimae </p>
        </S.CreatedBySection>
        <S.CreatedBySection>
          <p> e @the_xaavier </p>
        </S.CreatedBySection>
      </S.FooterContainer>
    </>
  );
}
