module.exports = `<div class="col-3">
    <div class="flex-parent">
        <img *ngIf="instance" [src]="instance.logo" />
        <a href="https://dst.gov.in/" target="_blank">
            <img
                class="ugix-logo"
                src="https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/ugix/dst.png"
                title="Department of science and technology"
            />
        </a>
        <a href="https://www.iisc.ac.in/" target="_blank">
            <img
                class="iisc-logo"
                src="https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/iisc.png"
                title="IISc Bangalore"
            />
        </a>
    </div>
    <div class="connect-with-us">
        <h4>Connect with us</h4>
        <div
            class="mt-3 d-flex justify-content-center social-media-icons"
        >

            <a
                class="a-icon"
                target="_blank"
                href="https://www.linkedin.com/company/geospatial-data-exchange/?viewAsMember=true"
            >
                <img src="https://catalogue.geospatial.org.in/assets/ugix/linkedin.svg" alt="linkedin" />
            </a>
            <a
                class="a-icon"
                target="_blank"
                href="https://github.com/datakaveri"
            >
                <img src="https://catalogue.geospatial.org.in/assets/ugix/github.svg" alt="github" />
            </a>
        </div>
    </div>
</div>
`;
