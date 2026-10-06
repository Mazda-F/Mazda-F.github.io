---
layout: page
title: 6-Axis Robotic Arm
description: A 6-DOF robotic arm designed from scratch, with CAD and 3D-printed mechanics, closed-loop stepper control, and a Python GUI with real-time forward/inverse kinematics over WiFi.
img: assets/img/arm-thumbnail.jpg
importance: 1
permalink: /projects/6-axis-robotic-arm/
github: https://github.com/Mazda-F
_styles: >
  .video-embed { position: relative; aspect-ratio: 16 / 9; margin: 1rem 0 1.5rem; }
  .video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 0.25rem; }
  .project-meta { color: var(--global-text-color-light); }
  .spec-table { width: 100%; margin: 1rem 0 1.5rem; font-size: 0.95rem; }
  .spec-table th, .spec-table td { padding: 0.35rem 0.5rem; border-bottom: 1px solid var(--global-divider-color); }
  .spec-table th { width: 40%; font-weight: 600; }
---

<p class="project-meta">Personal project &middot; Jun 2024 &ndash; present &middot; Python, C, ESP32, FreeRTOS, Fusion 360, 3D printing &middot; <a href="https://github.com/Mazda-F"><i class="fa-brands fa-github"></i> Code on GitHub</a></p>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/U0ZhAC6iEyQ" title="6-Axis Robotic Arm demo" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

For this project, I designed and programmed a 6-degree-of-freedom robotic arm. The main goal was to expand my technical skill set and problem-solving abilities, resulting in a diverse range of skills acquired in building a robot from scratch. This included CAD design, 3D printing, mastering matrix transformations for inverse and forward kinematics calculations, writing control software and a Python-based GUI, embedded programming in C, implementing WiFi communication, and developing closed-loop motor control algorithms.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/arm-hero.jpg" title="The assembled arm" alt="Assembled 6-axis robotic arm on a desk" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">The assembled arm.</div>

## Mechanical

The mechanical design of the arm was centered around three main components:

- **Ease of maintenance and upgrades:** the arm was built using readily available 3D printer parts, allowing for easy repairability and upgrades.
- **Encoder integration:** a minimum clearance of 10&nbsp;mm behind the stepper motors was maintained to accommodate magnetic encoders.
- **Spherical wrist for kinematics:** the design features a spherical wrist, ensuring that the axes of rotation for the last three joints intersect, which allows for an analytical inverse-kinematic solution using trigonometry.

The design was created in Fusion 360, utilizing standard 3D-printing components such as NEMA 17 stepper motors, aluminum stepper motor mounts, and steel flange couplings to connect the joints to the links. For joints J2 and J3, 50:1 and 5:1 planetary reducers were used, respectively. This setup allowed the robot to achieve a calculated payload of up to 1&nbsp;kg while maintaining high repeatability. The robot was 3D printed with PETG due to its higher heat resistance and better resistance to bending and impact forces compared to PLA.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/arm-diagram.jpg" title="Joints and link lengths" alt="Diagram of the robot's joints and link lengths" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Illustration of the robot's joints and link lengths.</div>

<div class="spec-wrap">
<table class="spec-table">
  <tbody>
    <tr><th>J1 &amp; J4</th><td>42mm NEMA 17</td></tr>
    <tr><th>J5 &amp; J6</th><td>23mm NEMA 17</td></tr>
    <tr><th>J2</th><td>NEMA 17 with 50:1 planetary reducer</td></tr>
    <tr><th>J3</th><td>NEMA 17 with 5:1 planetary reducer</td></tr>
    <tr><th>Maximum calculated payload</th><td>1 kg</td></tr>
    <tr><th>Repeatability</th><td>&plusmn;2 mm</td></tr>
  </tbody>
</table>
</div>

## Electrical

This robot uses standard stepper motors from 3D printers due to their high torque and low speed, which are ideal for this application. The motors are controlled using TMC2209 silent stepper drivers, with each joint controlled through the STEP and DIR pins on the stepper driver. Each driver was configured to an 8-microstep setting to maximize torque. A 24V 6A power supply powers all six stepper motors, but each motor's current was limited to 1A by the stepper driver to prevent overheating.

For controlling the stepper drivers and communicating with an external computer, the ESP32-S3 was selected due to its excellent documentation, particularly for WiFi and Bluetooth applications. However, when programming the motors, I encountered a limitation with the ESP32, which has only four available timers. This restriction prevented me from sending separate PWM signals with unique frequencies to each stepper driver. To overcome this, I wrote an algorithm that could simultaneously control all six motors by sharing a single timer.

For motor feedback, closed-loop control was implemented on J1, J4, J5, and J6 using AS5600 magnetic encoders and diametrically magnetized magnets, allowing precise control of these joints' positions with 12 bits of resolution. For J2 and J3, due to the difference in rotation between the motor shaft and the reducer, I manually positioned the robot in the home position on startup and used software-based step counters to track the joint positions, similar to most 3D-printer software. Lastly, an I2C multiplexer was used to connect all six magnetic encoders to the ESP32, enabling simultaneous communication and switching between each encoder chip.

<div class="spec-wrap">
<table class="spec-table">
  <tbody>
    <tr><th>Microcontroller</th><td>ESP32-S3 DevKitC-1</td></tr>
    <tr><th>Stepper drivers</th><td>TMC2209</td></tr>
    <tr><th>Position feedback</th><td>AS5600 magnetic encoders</td></tr>
  </tbody>
</table>
</div>

## Software

The software for this project is divided into two main components:

- **Robot controller software &amp; GUI:** written in Python, this component provides a graphical user interface that allows the user full control over each joint's position and the robot's tool-head position. It also features a real-time 3D simulation of the robot and communicates with the ESP32 over WiFi. In the background, the software continuously performs forward and inverse kinematics calculations using matrix operations and trigonometry.
- **ESP32 software:** the lower-level software on the ESP32 handles two primary tasks simultaneously: it establishes a TCP server on the microcontroller to listen for incoming data from the Python software, then moves the joints to the desired angular positions based on readings from the magnetic encoders.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/arm-schematic.jpg" title="Software architecture" alt="Schematic of the robot's software architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Schematic of the robot's software.</div>

### Robot controller software (Python)

The Python GUI is built using the customTkinter library, providing the user with full control over each of the robot's joints by allowing them to set angles between &minus;180&deg; and 180&deg;. The GUI also includes a homing feature, which returns every joint to 0&deg;, and allows the user to specify the robot's tool-frame position using XYZ coordinates and Euler angles. The tool frame's dimensions and orientation can be customized within the software, making the robot adaptable to various attachments, such as a gripper or camera.

The 3D simulation is created using Matplotlib by plotting the transformation matrices of the robot's joints, which leads to the mathematical computations the software performs for forward and inverse kinematics. The software uses Denavit&ndash;Hartenberg (DH) parameters to define each joint's transformation matrix. For forward kinematics, the joint angles specified by the user are used to calculate the product of each joint's transformation matrix using NumPy, resulting in the final frame's matrix, from which the tool frame's coordinates (X, Y, Z) and orientation (Rx, Ry, Rz) can be extracted. This process is repeated every time the 3D simulation is updated to reflect the robot's new position.

For inverse kinematics, due to the robot's spherical wrist, the joint angles can be calculated analytically from a given final position and orientation. First, a transformation matrix for the robot's final frame is created based on user input. Then the calculation works back to the center of the spherical wrist by multiplying it by the inverse of the tool-frame matrix and the J1&ndash;J6 matrix. Trigonometry is then used to calculate the joint angles for J1, J2, and J3. Forward kinematics is performed from J1 to J3 and the inverse of the J1&ndash;J3 matrix is multiplied by the J1&ndash;J6 matrix, obtaining the J4&ndash;J6 matrix, from which the joint angles for J4, J5, and J6 can be extracted.

For communication with the ESP32, the Python program acts as a TCP client, using sockets to send a list of joint angles formatted in JSON to the ESP32's TCP server. Once the robot has moved to the new pose, the Python program receives a "status: completed" message from the ESP32, allowing it to resume taking user inputs.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/arm-gui.jpg" title="Controller GUI" alt="Screenshot of the Python robotic arm controller GUI" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">The Python-based robotic arm controller GUI, showing live forward/inverse kinematics.</div>

### ESP32 software (C)

The ESP32 software utilizes a FreeRTOS task to run a TCP server, allowing it to communicate with the Python program while simultaneously controlling the robot by sending STEP and DIR commands to the six stepper drivers. The server listens for new joint angles from the controller, and once it receives a set of joint angles, it converts the JSON data into six separate joint angles. It then calls a motor control function, which reads the registers from the magnetic encoders. Using this data, along with the step counters for J2 and J3, the function moves all motors simultaneously to their correct angular positions.

## Next steps

- **Custom actuators:** research and develop custom joint actuators built around BLDC motors, with a custom field-oriented control (FOC) motor controller PCB and a harmonic or cycloidal reducer, for higher torque density, lower backlash, and better positional precision than the current stepper-based joints.
- **Motion planning and kinematics:** research more advanced trajectory generation and kinematics algorithms, such as smooth time-parameterized trajectories, numerical (Jacobian-based) inverse kinematics, and singularity handling.
