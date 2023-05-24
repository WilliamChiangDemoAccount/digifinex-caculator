import { Announcement } from "@shared/enums/common.enum";

type AnnouncementConfig = {
    announcementDate: string;
    effectiveDate: string;
    html: string;
}

export const footerAnnouncement = [
    Announcement.PrivacyPolicy,
    Announcement.TermsofUse,
    // Announcement.CookiePolicy,
];

export const announcementConfig: Map<Announcement, AnnouncementConfig> = new Map([
    [
        Announcement.PrivacyPolicy,
        {
            announcementDate: '2023-05-19',
            effectiveDate: '2023-05-19',
            html: 'Privacy Policy'
        }
    ],
    [
        Announcement.TermsofUse,
        {
            announcementDate: '2023-05-19',
            effectiveDate: '2023-05-19',
            html: 'Terms of Use'
        }
    ],
    [
        Announcement.CookiePolicy,
        {
            announcementDate: '2023-01-01',
            effectiveDate: '2023-02-01',
            html: 'Cookie Policy'
        }
    ]
])