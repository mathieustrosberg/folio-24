import React from "react";

const ProfileDetails = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      <h2 className="flex flex-col h-100 w-5/12 gap-10 text-sm">À propos</h2>

      <div className="flex flex-col md:w-9/12 leading-7 gap-6 text-sm">
        <p>
          Après avoir obtenu mon baccalauréat STI2D, j'ai travaillé dans
          l'industrie pendant 6 ans dans le secteur de la métallurgie. Mon
          attrait pour l'informatique et le design m'a ensuite orienté vers le
          graphisme, où j'ai travaillé trois ans en freelance. La rencontre de
          problématiques spécifiques de clients m'a introduit au métier de
          développeur web, révélant une passion qui motive aujourd'hui ma
          reconversion.
        </p>
        <p>
          Je suis à la recherche d'une opportunité d'alternance en tant que
          concepteur développeur en nouvelles technologies. Je serai ravie de
          rejoindre une entreprise qui pourra me faire évoluer en me formant en
          tant que développeur web.
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
