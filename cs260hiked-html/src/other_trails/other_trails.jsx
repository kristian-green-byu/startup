import React from 'react';
import './other_trails.css';

export function Other_trails() {
  return (
    <div>
      <h2 style={{marginTop: '1%'}}>More Information and Additional Trails</h2>

      <img className="default_img" src="https://www.visitutah.com/azure/cmsroot/visitutah/media/site-assets/three-season-photography/northern-utah/timpanogos-cave/utah-county_jay-droghns_timpanogos-cave-12.jpg?w=800&h=550&mode=crop" alt="Photo of Timp Cave Hike"/>
      <p className="paragraph">The Timpanogos Cave trail is a moderately difficult 3.1 mile out-and-back trail...</p>

      <img className="default_img" src="https://www.nps.gov/zion/learn/news/images/Angels-Landing-November-2021-reduced.jpg" alt="Photo of Angel's Landing" width="100%"/>
      <p className="paragraph">Angel's Landing is a 4.3 mile out-and-back trail with 1827ft of elevation gain...</p>

      <img className="default_img" src="https://packedagain.com/wp-content/uploads/2021/02/feature_delicate-arch.jpg" alt="Photo of Delicate Arch" width="100%"/>
      <p className="paragraph">The Delicate Arch is a 3.2 mile out-and-back trail with 629ft of elevation gain...</p>

      <img className="default_img" src="https://images.squarespace-cdn.com/content/v1/6226f62738f4f73d2b353e79/c7b795e1-4211-4246-89c9-f1db4b0f1689/DSC07798.jpg" alt="Photo of King's Peak" width="100%"/>
      <p className="paragraph">King's Peak is the highest point in all of Utah...</p>

      <div className="divider"></div>
    </div>
  );
}
