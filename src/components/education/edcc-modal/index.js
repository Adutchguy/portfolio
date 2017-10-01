import './_edcc-modal.scss';
import React, { Component } from 'react';

class EdccModal extends React.Component {
  constructor(props){
    super(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(e) {
    if (e.target.parentNode.className !== 'app') {
      return;
    }

    this.props.handleEdccModalClickEvent(e);
  }

  render() {
    return (
      <div onClick={this.handleOutsideClick} className='edcc-modal'>
        <div className='edcc-modal-body'>
          <h3> Completed Courses </h3>
          <ul>
            <li>
              <h4>Network Workstation</h4>
              <p><strong>Description: </strong>
              Windows operating system (OS) with emphasis on command line functions. Topics include: installation and Windows features, OS navigation, and administrative tools. </p>
            </li>

            <li>
              <h4>Introduction to Business Computing</h4>
              <p><strong>Description: </strong>
              An introduction to business computing concepts and applications using Windows and MS Office. Includes introduction to HTML, hardware components, information processing cycle in business, how networks work, etc.</p>
            </li>

            <li>
              <h4>Intermediate Business Computing</h4>
              <p><strong>Description: </strong>
              Extends the concepts and software learned in CIS 100. Intermediate expertise of word-processing, spreadsheets, and database software is attained. Concepts include trends/careers in information systems (IS), database/IS management, IS development, security, privacy and ethics.</p>
            </li>

            <li>
              <h4>A+ Hardware Support I & II</h4>
              <p><strong>Description: </strong> A comprehensive course in computer hardware. Students will build, analyze, and diagnose PC hardware components and peripherals. Emphasis is placed on PC Hardware, networking, mobile devices, and troubleshooting using industry standard test equipment. Hands-on training in the use of a digital multimeter and USB voltage analyzer is included.</p>
            </li>

            <li>
              <h4>Cisco Networking I</h4>
              <p><strong>Description: </strong> Topics include functions, components and models of computer networks, and the Internet; structure and implementation of IPv4 and IPv6; ethernet concepts, media, and operations. Students build simple LANs and perform command line configuration for routers and switches.</p>
            </li>

            <li>
              <h4>Cisco Networking II</h4>
              <p><strong>Description: </strong> Topics include basic operation, configuration, and troubleshooting of routers and switches; students will configure router and switch operations and protocols such as RIPv1, RIPv2, single-area/multi-area OSPF, virtual LANs, inter-VLAN routing, and ACLs.</p>
            </li>

            <li>
              <h4>Cisco Networking III</h4>
              <p><strong>Description: </strong> Topics include architecture, components, and operations of routers and switches in larger complex networks. Students will implement DHCP and DNS, and perform advanced configuration and troubleshooting with OSPF/EIGRP/STP/VTP, and NAT in both IPv4/IPv6 networks. </p>
            </li>

            <li>
              <h4>Cisco Networking IV</h4>
              <p><strong>Description: </strong> Topics include hierarchical network design, PPP and frame-relay, WAN technologies, broadband solutions, IPSec and VPNs, network monitoring, enterprise network troubleshooting, borderless networking, virtualization, and collaboration in network architectures.</p>
            </li>

            <li>
              <h4>PC Desktop Support</h4>
              <p><strong>Description: </strong> Advanced topics in desktop support. Development of problem solving skills used in supporting the desktop user. Students work in teams to create and manage their own helpdesk. Emphasis on troubleshooting, problem solving, and customer support</p>
            </li>

            <li>
              <h4>Business Communications</h4>
              <p><strong>Description: </strong> Memos, letters, reports, and oral presentations using business style and strategy. Revision of writing, group interaction, and diversity are emphasized, as well as written and oral communication.</p>
            </li>

            <li>
              <h4>Server Administration</h4>
              <p><strong>Description: </strong> Managing and maintaining Windows Server. Topics include: Active Directory, Group Policies, File Services, DNS, Remote Access, Server Management, and Maintenance.</p>
            </li>

            <li>
              <h4>Intro to Network Security</h4>
              <p><strong>Description: </strong> Topics include communication, infrastructure, operational and organizational security, underlying principles used to secure networks, security technologies, intrusion detection, authentication, and cryptography basics. Maps to Security+ exam.</p>
            </li>

            <li>
              <h4>Active Directory</h4>
              <p><strong>Description: </strong> Topics include advanced training in Active Directory, file and storage, DHCP, DNS, Hyper-V, failover clustering, and certificate services. Students will configure and manage Active Directory, group policies, permissions, and certificate services in a Windows environment.</p>
            </li>

            <li>
              <h4>Exchange Server</h4>
              <p><strong>Description: </strong> Administering and configuring Exchange Server; creating address lists, public folders and virtual servers; implementing SMTP and security, including Exchange database backup and restore.</p>
            </li>

            <li>
              <h4>Firewall Implementation</h4>
              <p><strong>Description: </strong> Topics include: planning, configuring and implementing firewalls, proxy servers and Web filtering.</p>
            </li>

            <li>
              <h4>LINUX/UNIX</h4>
              <p><strong>Description: </strong> Topics include base Linux commands; combining commands to create utilities; managing files, software and processes; creating partitions and Logical Volumes; editing text; managing users and groups; extended attributes and basic networking.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EdccModal;
